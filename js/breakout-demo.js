(function(window) {
    var medium_window = 760;
    var settings = {};
    var large_block_font = 8,
        large_paddle_font = 14,
        small_block_font = 3,
        small_paddle_font = 8;
    var large_collapsed_height = 200, small_collapsed_height = 80;
    var expand_breakout, reset_breakout;
    var fade_in_out, fade_in_delete, fade_in_add;

    settings.onToggleSound = function(snd) {
      if (snd) {
        $("#sound-toggle").html("ON");
      } else {
        $("#sound-toggle").html("OFF");
      }
    };

    settings.onGameStart = function() {
      fade_in_out("Welcome to Figlet Breakout!");
    };

    settings.onGameOver= function(has_won) {
      if (has_won) {
        fade_in_out("You won Figlet Breakout!");
      } else {
        fade_in_out("Sorry, try again!");
      }
      reset_breakout();
    };

    settings.onGameFlash = function(msg) {
      fade_in_out(msg);
    };

    fade_in_add = function(el, to_add, callback) {
      el.append(to_add);
      $(to_add).addClass("fadeInDown");  
      if (typeof callback === 'function') { callback(); }
    };

    fade_out_delete = function(el, callback) {
      $(el).addClass("fadeOut");  
      setTimeout(function() {
        el.parentNode.removeChild(el);
        $(el).removeClass("fadeOut");
        if (typeof callback === 'function') { callback(); }
      }, 500);
    };

    fade_in_out = function(msg) {
      var el, to_add;
      el = $("#msg-flash");
      to_add = document.createElement('div');
      to_add.className = "flash animated ";
      to_add.innerHTML = msg;
      fade_in_add(el, to_add, function() {
        setTimeout(function() {
          fade_out_delete(to_add);
        }, 2000);
      });
    };

    settings.figlet_font = "3-d";
    settings.font_name = "pressStart";
    settings.game_str = "Click to play\nFiglet Breakout!";
    settings.font_size = ($(window).width() < medium_window) ? small_block_font : large_block_font;
    settings.p_font_size = ($(window).width() < medium_window) ? small_paddle_font : large_paddle_font; 
    settings.onGamePoints = function(pts) { $("#points").html(pts); };
    settings.wrap = true;

    expand_breakout = function() {
      $("#breakout-box").animate({
        height: $(window).height() - $(".info-box").height()
      }, 100, function() {
        $(".info-box").show();
        FigletBreakout.reset();
        FigletBreakout.play();
      });
    };

    reset_breakout = function() {
      if (! FigletBreakout.game) { return; }
      var height = ($(window).width() < medium_window) ? small_collapsed_height : large_collapsed_height;
      $(".info-box").hide();
      $("#breakout-box").height(height);
      settings.font_size = ($(window).width() < 760) ? 3 : 8;
      settings.p_font_size = ($(window).width() < 760) ? 12 : 14;
      FigletBreakout.reset(settings);
      $("#breakout-box").off("click", expand_breakout);
      $("#breakout-box").one("click", expand_breakout);
    };

    // Reset the canvas on window resize
    $(window).on("resize", function() {
      reset_breakout();
    });

    routie('/:str?', function(str) {
      var decoded;
      if (str) {
        decoded = decodeURIComponent(str);
        settings.game_str = decoded;
      }
      if (FigletBreakout.game) {
        reset_breakout();
      } else {
        FigletBreakout.init(settings);
        $("#breakout-box").one("click", expand_breakout);
      }
    });
}(window));
