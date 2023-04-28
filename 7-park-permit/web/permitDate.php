<form method="POST">
    <div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input type="date" class="form-control" name="date" value="<?php echo $date; ?>">
    </div>
    <button type="submit" class="btn btn-primary">Check Date</button>
    <br>
</form>

<?php
    $conn = get_database_connection();

    if (isset($date))
    {
    $sql = <<<SQL
    SELECT par_name, pka_name
    FROM parks 
    JOIN park_areas ON par_id = pka_par_id
    WHERE pka_id NOT IN (
                        SELECT apa_pka_id
                        FROM application_park_areas
                        JOIN applications ON apa_app_id = app_id
                        WHERE app_date = '$date'
                    )
    ORDER BY par_name, pka_name
    SQL;

    $result = $conn->query($sql);
    $row = $result->fetch_assoc();

    while ($row = $result->fetch_assoc())
    {
        echo $row['par_name'] . ' ' . $row['pka_name'];
    }

    $conn->close();
    }

?>

