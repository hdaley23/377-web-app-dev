<?php

/*************************************************************************************************
 * permitList.php
 *
 * Content page to display a list of applications. This page is expected to be contained within
 * index.php.
 *************************************************************************************************/

?>

<script>
    function editApplication(id) {
        location.href = 'index.php?content=detail&id=' + id;
    }
</script>

<table class='table table-bordered table-hover'>
    <thead>
        <tr class="table-dark">
            <th>#</th>
            <th>Date</th>
            <th>Applicant</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Field(s)</th>
        </tr>
    </thead>
    <tbody class="table-group-divider">

    <?php

    $conn = get_database_connection();

    // Build the SELECT statement
    $sql = <<<SQL
    SELECT app_id, app_date, cus_first_name, cus_last_name, cus_phone, cus_email,
           GROUP_CONCAT(CONCAT(par_name, ' - ', pka_name) ORDER BY pka_name SEPARATOR '<br>') as field_list
      FROM applications
                 JOIN customers              ON cus_id = app_cus_id
      LEFT OUTER JOIN application_park_areas ON apa_app_id = app_id
      LEFT OUTER JOIN park_areas             ON apa_pka_id = pka_id
      LEFT OUTER JOIN parks                  ON pka_par_id = par_id
     GROUP BY 1, 2, 3, 4, 5, 6
     ORDER BY app_date, cus_last_name, cus_first_name, app_id
    SQL;

    // Execute the query and save the results
    $result = $conn->query($sql);

    $empty = true;

    // Iterate over each row in the results
    while ($row = $result->fetch_assoc())
    {
        echo '<tr class="align-middle" style="cursor:pointer" onclick="editApplication(' . $row['app_id'] . ')">';
        echo '<td>' . $row['app_id'] . '</td>';
        echo '<td>' . (new DateTimeImmutable($row['app_date']))->format('n/j/Y') . '</td>';
        echo '<td>' . $row['cus_last_name'] . ', ' . $row['cus_first_name'] . '</td>';
        echo '<td>' . $row['cus_phone'] . '</td>';
        echo '<td><a href="mailto:'. $row['cus_email'] . '">' . $row['cus_email'] . '</a></td>';
        echo '<td>' . $row['field_list'] . '</td>';
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

<a href='index.php?content=detail' class='btn btn-primary' role='button'><i class='fa fa-plus-circle' aria-hidden='true'></i>&nbsp;Add an application</a>