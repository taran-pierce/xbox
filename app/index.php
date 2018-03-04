<?php
  # Page Vars
  $active_link = '/';
?>
<?php include 'templates/top.php' ?>
<section>
  <div class="container">
    <h1>Xbox Live API</h1>
    <div class="row">
      <div class="col-xs-12">
        <h2>Find Xbox User</h2>
        <p>Search for any Xbox user and pull up a few quick details to verify it is the person you are looking for. You will get a quick glimpse of that user before having to pull up a
        lot of extra details you may not care about.</p>
        <?php include( 'templates/forms/_form-profile.php' ); ?>
      </div>
    </div>
  </div>
</section>
<?php include 'templates/bottom.php' ?>
