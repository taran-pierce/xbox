<?php
  # Page Vars
  $active_link = '/';
?>
<?php include 'templates/top.php' ?>
<section>
  <div class="container">
    <h1>Xbox Live API</h1>
    <div class="row">
      <div class="col-sm-6">
        <div class="form-container">
          <h2>Find Xbox User</h2>
          <p>Search for any Xbox user and pull up a few quick details to verify it's the person you are looking for. You will get a quick glimpse of that user before having to pull up a lot of extra details you may not care about.</p>
          <hr />
          <h5>Details:</h5>
          <ul>
            <li>Tenure</li>
            <li>Reputation</li>
            <li>Gamerscore</li>
            <li>Gamer pic</li>
            <li>Link to profile page</li>
          </ul>
          <form id="user-profile">
            <div class="form-group">
              <label for="gamer_tag">Gamer Tag</label>
              <input name="gamer_tag" id="gamer_tag" type="text" class="form-control" placeholder="Gamer Tag" />
            </div>
            <button class="btn btn-primary btn-lg" type="submit">Find</button>
          </form>
        </div>
      </div>
      <div class="col-sm-6">
        <div id="user-card" class="user-card-container"></div>
      </div>
    </div>
  </div>
</section>
<?php include 'templates/bottom.php' ?>
