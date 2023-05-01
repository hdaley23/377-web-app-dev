<?php

/*************************************************************************************************
 * save.php
 *
 * Page to save a single player. This page expects the following request paramaters to
 * be set:
 *
 * - plapId (this value will be empty if saving a new record)
 * - firstName
 * - lastName
 * - instagram
 * - status (this value will be set to playing if saving a new record)
 *************************************************************************************************/

include('library.php');

$conn = get_database_connection();

// Sanitize all input values to prevent SQL injection exploits
$plaId = $conn->real_escape_string($plaId);
$firstName = $conn->real_escape_string($firstName);
$lastName = $conn->real_escape_string($lastName);
$instagram = $conn->real_escape_string($instagram);
$status = $conn->real_escape_string($status);

// Determine if we need to create a new application or edit an existing application
if (empty($plaId))
{
    /*
     * This is a new application (INSERT operation)
     */

    // Step 1: Create the `player` record
    $sql = <<<SQL
    INSERT INTO players (pla_first_name, pla_last_name, pla_instagram, pla_status)
        VALUES ('$firstName', '$lastName', '$instagram', '$status')
    SQL;

    if (!$conn->query($sql))
    {
        die('Error inserting customer record: ' . $conn->error);
    }

}
else
{
    /*
     * This is an existing application (UPDATE operation)
     */

    // Step 1: Update the `player` record
    $sql = <<<SQL
    UPDATE player
       SET pla_first_name = '$firstName',
           pla_last_name = '$lastName',
           pla_instagram = '$instagram',
           pla_status = '$status'
     WHERE pla_id = $plaId
    SQL;

    if (!$conn->query($sql))
    {
        die('Error updating customer record: ' . $conn->error);
    }
}

$conn->close();

header('Location: index.php?content=list');