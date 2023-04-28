<?php

/*************************************************************************************************
 * assassinList.php
 *
 * Content page to display a list of players. This page is expected to be contained within
 * index.php.
 *************************************************************************************************/

?>

<script>
    function editPlayer(id) {
        location.href = 'index.php?content=detail&id=' + id;
    }
</script>

<table class='table table-bordered table-hover'>
    <thead>
        <tr class="table-dark">
            <th>#</th>
            <th>Name</th>
            <th>Instagram</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody class="table-group-divider">

    <?php

    $conn = get_database_connection();

    // Build the SELECT statement
    $sql = <<<SQL
    SELECT *
      FROM players
    SQL;

    // Execute the query and save the results
    $result = $conn->query($sql);

    $empty = true;

    // Iterate over each row in the results
    while ($row = $result->fetch_assoc())
    {
        echo '<tr class="align-middle" style="cursor:pointer" onclick="editPlayer(' . $row['pla_id'] . ')">';
        echo '<td>' . $row['pla_id'] . '</td>';
        echo '<td>' . $row['pla_first_name'] . ' ' . $row['pla_last_name'] . '</td>';
        echo '<td>' . $row['pla_instagram'] . '</td>';
        echo '<td>' . $row['pla_status'] . '</td>';
        echo '</tr>';

        $empty = false;
    }

    if ($empty)
    {
        echo '<tr><td class="text-center" colspan="7"><em>No Records</em></td></tr>';
    }

    ?>

    </tbody>
</table>

<a href='index.php?content=detail' class='btn btn-primary' role='button'><i class='fa fa-plus-circle' aria-hidden='true'></i>&nbsp;Add a Player</a>