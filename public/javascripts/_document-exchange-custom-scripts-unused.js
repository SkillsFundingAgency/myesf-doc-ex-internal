/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// Document exchange custom scripts

// // Collapsible filters TEMPLATE
// Example filter provided by Alex Painter alex.painter@methods.co.uk
// Used in CFS prototypes
// Collapsible filters adapted for use in this Document exchange prototype


// $('.filter-expand').click(function () {
//   if ($("[id^=filter-content]").hasClass('filter-content')) {
//     $("[id^=filter-content]").removeClass('filter-content');
//     $("[id^=arrowRotate]").addClass('arrowChange');
//   }
//   else {
//     $("[id^=arrowRotate]").removeClass('arrowChange');
//     $("[id^=filter-content]").addClass('filter-content');
//   }
// });

// Collapsible filters STATUS
$('.filter-expand-status').click(function () {
  if ($("[id^=filter-content-status]").hasClass('filter-content-status')) {
    $("[id^=filter-content-status]").removeClass('filter-content-status');
    $("[id^=arrowRotateStatus]").addClass('arrowChange');
  }
  else {
    $("[id^=arrowRotateStatus]").removeClass('arrowChange');
    $("[id^=filter-content-status]").addClass('filter-content-status');
  }
});

// Collapsible filters DOCUMENT TYPE
$('.filter-expand-document-type').click(function () {
  if ($("[id^=filter-content-document-type]").hasClass('filter-content-document-type')) {
    $("[id^=filter-content-document-type]").removeClass('filter-content-document-type');
    $("[id^=arrowRotateDocumentType]").addClass('arrowChange');
  }
  else {
    $("[id^=arrowRotateDocumentType]").removeClass('arrowChange');
    $("[id^=filter-content-document-type]").addClass('filter-content-document-type');
  }
});

// Collapsible filters TIME PERIOD
$('.filter-expand-time-period').click(function () {
  if ($("[id^=filter-content-time-period]").hasClass('filter-content-time-period')) {
    $("[id^=filter-content-time-period]").removeClass('filter-content-time-period');
    $("[id^=arrowRotateTime]").addClass('arrowChange');
  }
  else {
    $("[id^=arrowRotateTime]").removeClass('arrowChange');
    $("[id^=filter-content-time-period]").addClass('filter-content-time-period');
  }
});

// Collapsible filters DATE
$('.filter-expand-date').click(function () {
  if ($("[id^=filter-content-date]").hasClass('filter-content-date')) {
    $("[id^=filter-content-date]").removeClass('filter-content-date');
    $("[id^=arrowRotateDate]").addClass('arrowChange');
  }
  else {
    $("[id^=arrowRotateDate]").removeClass('arrowChange');
    $("[id^=filter-content-date]").addClass('filter-content-date');
  }
});

// Collapsible filters ESTABLISHMENT (PROVIDER) TYPE
$('.filter-expand-establishment-type').click(function () {
  if ($("[id^=filter-content-establishment-type]").hasClass('filter-content-establishment-type')) {
    $("[id^=filter-content-establishment-type]").removeClass('filter-content-establishment-type');
    $("[id^=arrowRotateEstablishmentType]").addClass('arrowChange');
  }
  else {
    $("[id^=arrowRotateEstablishmentType]").removeClass('arrowChange');
    $("[id^=filter-content-establishment-type]").addClass('filter-content-establishment-type');
  }
});

//Filter and search 
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// Main content search
$(document).ready(function () {
  $("#mainContentSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#mainContentResults tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Profiling search
$(document).ready(function () {
  $("#profilingSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#accordion-default div").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// Accordion search
$(document).ready(function () {
  $("#mainContentSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#mainContentResults div").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// Checkbox select

$( document ).ready(function() {
    
  var checkboxes = $("input[id^=documenttype1]"),
  displays1 = $("#14to16revenue");

  checkboxes.click(function() {
  
    displays1.attr("hidden", !checkboxes.is(":checked"));
    
  });
    
});