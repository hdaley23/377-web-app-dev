<?php

/*************************************************************************************************
 * delete.php
 *
 * Page to delete a single player. This page
 * expects the 'id' request paramater to be set which represents the ID of the player to
 * delete.
 *
 * TODO: make it also delete the player's assignment after targets have been assigned 
 *************************************************************************************************/

include('library.php');

$conn = get_database_connection();

// Step 0: Delete the customer record TODO: Don't do this! See note above

$sql = <<<SQL
DELETE FROM players
 WHERE pla_id = $plaId
SQL;

if (!$conn->query($sql))
{
    die('Error deleting the player record: ' . $conn->error);
}

// Step 2: Delete the children application_park_area records
// $sql = <<<SQL
// DELETE FROM assignments
//  WHERE ast_pla_id = $id
// SQL;

// if (!$conn->query($sql))
// {
//     die('Error deleting application record: ' . $conn->error);
// }

$conn->close();

header('Location: index.php?content=list');