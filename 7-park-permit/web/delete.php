<?php

/*************************************************************************************************
 * delete.php
 *
 * Page to delete a single application and all it's related application_park_areas. This page
 * expects the 'id' request paramater to be set which represents the ID of the application to
 * delete.
 *
 * TODO: This page also deletes the customer record to "keep things clean" but it shouldn't
 *************************************************************************************************/

include('library.php');

$conn = get_database_connection();

// Step 0: Delete the customer record TODO: Don't do this! See note above
$sql = <<<SQL
SELECT app_cus_id
  FROM applications
 WHERE app_id = $id
SQL;

if (!$conn->query($sql))
{
    die('Error finding the application record: ' . $conn->error);
}

$result = $conn->query($sql);
$row = $result->fetch_assoc();
$cusId = $row['app_cus_id'];

$sql = <<<SQL
DELETE FROM customers
 WHERE cus_id = $cusId
SQL;

if (!$conn->query($sql))
{
    die('Error deleting the customer record: ' . $conn->error);
}

// Step 1: Delete the application record
$sql = <<<SQL
DELETE FROM applications
 WHERE app_id = $id
SQL;

if (!$conn->query($sql))
{
    die('Error deleting application record: ' . $conn->error);
}

// Step 2: Delete the children application_park_area records
$sql = <<<SQL
DELETE FROM application_park_areas
 WHERE apa_app_id = $id
SQL;

if (!$conn->query($sql))
{
    die('Error deleting application record: ' . $conn->error);
}

$conn->close();

header('Location: index.php?content=list');