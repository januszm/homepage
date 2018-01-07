<?php session_start() ?>
...
form class="form" method="post" action="/mailer.php">
            <?php $randomtoken = md5(uniqid(rand(), true)); ?>
            <?php $_SESSION['csrfToken']=$randomtoken; ?>
            <input type="hidden" name="csrfToken" value="<?php echo($_SESSION['csrfToken']) ?>" />
