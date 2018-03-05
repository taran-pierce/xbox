<?php
  # Page Vars
  $active_link = '/';
?>
<?php include 'templates/top.php' ?>
<section>
  <div class="container">
    <h1>Xbox Live API</h1>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <h2>Find Xbox User</h2>
        <p>Search for any Xbox user and pull up a few quick details to verify it is the person you are looking for. You will get a quick glimpse of that user before having to pull up a
        lot of extra details you may not care about.</p>
        <?php include( 'templates/forms/_form-profile.php' ); ?>
      </div>
     <div class="col-xs-12 col-sm-6">
       <h4>Progress</h4>
       <ul class="list-unstyled list-inline api-progress">
         <li>
           <span id="api-profile">Profile</span>
         </li>
         <li>
          <span id="api-friends">Friends</span>
        </li>
        <li>
         <span id="api-game-clips">Game Clips</span>
        </li>
       </ul>
     </div>
    </div>
    <div class="row">
     <div class="col-xs-12">
      <div id="user-profile" class="card">
        <h4>Name: <span data-bind="text: gamerTag"></span></h4>
        <ul>

        </ul>
      </div>
    </div>
  </div>
</section>
<?php include 'templates/bottom.php' ?>
