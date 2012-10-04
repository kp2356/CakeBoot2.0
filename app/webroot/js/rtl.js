	// popover demo
    $("a[rel=popover]")
      .popover({trigger:'hover',delay: { show: 500, hide: 100 }, placement:'left'})
      .click(function(e) {
        e.preventDefault()
      });