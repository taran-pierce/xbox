<form id="user-profile" action="/index.php" method="GET">
  <div class="form-group">
    <label for="gamer_tag">Gamer Tag</label>
    <input data-bind="value: gamerTag" name="gamer_tag" id="gamer_tag" type="text" class="form-control" />
  </div>
  <button data-bind="click: getGamerTag" class="btn btn-primary btn-lg" type="submit">Find</button>
</form>