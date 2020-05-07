var dragged;

  /* events fired on the draggable target */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {
      // store a ref. on the dragged elem
      if (event.target.parentElement.parentElement.className == "items") {
        dragged = event.target.cloneNode(deep=true);
      }
      else {
        dragged = event.target;
      }
      // make it half transparent
      event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
      // reset the transparency
      event.target.style.opacity = "";
  }, false);

  /* events fired on the drop targets */
  document.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "drop" ) {
          event.target.style.background = "#cfd8dc";
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
      }

  }, false);

  document.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if ( event.target.className == "workspace dropzone" ) {
          event.target.style.background = "";
          if (dragged.parentNode) dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }
      if ( event.target.className == "containerdrag" ) {
          event.target.style.background = "";
          if (dragged.parentNode) dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }
      else if (event.target.className == "dropzone trash drop") {
        event.target.style.background = "";
        if (dragged.parentNode) dragged.parentNode.removeChild( dragged );
      }

  }, false);
