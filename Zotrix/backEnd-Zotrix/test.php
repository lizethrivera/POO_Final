<?php
    echo "Sha1".sha1("1234Olga")."<br>";
    echo "Token".sha1(uniqid(rand(), true));

?>