/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

//Work in progress scripts

// // Collapsible filters template
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

// // Collapsible filters status
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

// Collapsible filters document type
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
// Collapsible filters time period
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
// Collapsible filters date
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
// Collapsible filters establishment type
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
// Collapsible filters establishment sub-type
// $('.filter-expand-establishment-sub-type').click(function () {
//   if ($("[id^=filter-content-establishment-sub-type]").hasClass('filter-content-establishment-sub-type')) {
//     $("[id^=filter-content-establishment-sub-type]").removeClass('filter-content-establishment-sub-type');
//     $("[id^=arrowRotateEstablishmentSubType]").addClass('arrowChange');
//   }
//   else {
//     $("[id^=arrowRotateEstablishmentSubType]").removeClass('arrowChange');
//     $("[id^=filter-content-establishment-sub-type]").addClass('filter-content-establishment-sub-type');
//   }
// });

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

// // Button changes

// // STATUS FILTER
// function buttonChangeStatus() {
// var x = document.getElementById("statusButton").getAttribute("aria-expanded"); 
// if (x == "true") 
// {
// x = "false"
// } else {
// x = "true"
// }
// document.getElementById("statusButton").setAttribute("aria-expanded", x);
// }

// // DOCUMENT TYPE FILTER
// function buttonChangeDocumentType() {
// var x = document.getElementById("documentTypeButton").getAttribute("aria-expanded"); 
// if (x == "true") 
// {
// x = "false"
// } else {
// x = "true"
// }
// document.getElementById("documentTypeButton").setAttribute("aria-expanded", x);
// }

// // UPLOADED TODAY FILTER
// function buttonChangeUploadedToday() {
// var x = document.getElementById("uploadedTodayButton").getAttribute("aria-expanded"); 
// if (x == "true") 
// {
// x = "false"
// } else {
// x = "true"
// }
// document.getElementById("uploadedTodayButton").setAttribute("aria-expanded", x);
// }

// // DATE FILTER
// function buttonChangeDate() {
// var x = document.getElementById("dateFilterButton").getAttribute("aria-expanded"); 
// if (x == "true") 
// {
// x = "false"
// } else {
// x = "true"
// }
// document.getElementById("dateFilterButton").setAttribute("aria-expanded", x);
// }

// // PROVIDER TYPE FILTER
// function buttonChangeProviderType() {
// var x = document.getElementById("providerTypeButton").getAttribute("aria-expanded"); 
// if (x == "true") 
// {
// x = "false"
// } else {
// x = "true"
// }
// document.getElementById("providerTypeButton").setAttribute("aria-expanded", x);
// }

// // Checkbox select

// function toggleCheckbox() {
//   var checkbox1 = document.getElementById("documenttype1").checked;
//   if (checkbox1) {
//     document.getElementById("14to16revenue").style.display = "block";
//   } else {
//     document.getElementById("14to16revenue").style.display = "none";
//   }
// }

// document.getElementById("documenttype1").onclick = toggleCheckbox;


// $('.selecttype1').click(function () {
//   if ($("[id^=14to16revenue]").hasClass('select1416revenue')) {
//     $("[id^=14to16revenue]").removeClass('select1416revenue');
//   }
//   else {
//     $("[id^=14to16revenue]").addClass('select1416revenue');
//   }
// });

$( document ).ready(function() {
    
  var checkboxes = $("input[id^=documenttype1]"),
  displays1 = $("#14to16revenue");

  checkboxes.click(function() {
  
    displays1.attr("hidden", !checkboxes.is(":checked"));
    
  });
    
});