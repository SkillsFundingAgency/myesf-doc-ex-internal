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

// Collapsible filters status
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
// Collapsible filters date error states examples
$('.filter-expand-date-error-states-examples').click(function () {
  if ($("[id^=filter-content-date-error-states-examples]").hasClass('filter-content-date-error-states-examples')) {
    $("[id^=filter-content-date-error-states-examples]").removeClass('filter-content-date-error-states-examples');
    $("[id^=arrowRotateDate]").addClass('arrowChange');
  }
  else {
    $("[id^=arrowRotateDate]").removeClass('arrowChange');
    $("[id^=filter-content-date-error-states-examples]").addClass('filter-content-date-error-states-examples');
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
$('.filter-expand-establishment-sub-type').click(function () {
  if ($("[id^=filter-content-establishment-sub-type]").hasClass('filter-content-establishment-sub-type')) {
    $("[id^=filter-content-establishment-sub-type]").removeClass('filter-content-establishment-sub-type');
    $("[id^=arrowRotateEstablishmentSubType]").addClass('arrowChange');
  }
  else {
    $("[id^=arrowRotateEstablishmentSubType]").removeClass('arrowChange');
    $("[id^=filter-content-establishment-sub-type]").addClass('filter-content-establishment-sub-type');
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

// Checkboxes
// 14 to 16 revenue funding allocation statements (Document type 1)
$("[id^=selectDocumentType1]").click(function () {
  if ($("[id^=documentType1]").hasClass('hideDocumentType')) {
    $("[id^=documentType1]").removeClass('hideDocumentType');
    $("[id^=documentType1]").addClass('showDocumentType');
    $("[id^=noneSelected]").addClass('hideNoneSelected1');
  }
  else {
    $("[id^=documentType1]").removeClass('showDocumentType');
    $("[id^=documentType1]").addClass('hideDocumentType');
    $("[id^=noneSelected]").removeClass('hideNoneSelected1');
  }
});
// 16 to 19 reconciliation statements (Document type 2)
$("[id^=selectDocumentType2]").click(function () {
  if ($("[id^=documentType2]").hasClass('hideDocumentType')) {
    $("[id^=documentType2]").removeClass('hideDocumentType');
    $("[id^=documentType2]").addClass('showDocumentType');
    $("[id^=noneSelected]").addClass('hideNoneSelected2');
  }
  else {
    $("[id^=documentType2]").removeClass('showDocumentType');
    $("[id^=documentType2]").addClass('hideDocumentType');
    $("[id^=noneSelected]").removeClass('hideNoneSelected2');
  }
});
// Business case audit evidence requests (Document type 3)
$("[id^=selectDocumentType3]").click(function () {
  if ($("[id^=documentType3]").hasClass('hideDocumentType')) {
    $("[id^=documentType3]").removeClass('hideDocumentType');
    $("[id^=documentType3]").addClass('showDocumentType');
    $("[id^=noneSelected]").addClass('hideNoneSelected3');
  }
  else {
    $("[id^=documentType3]").removeClass('showDocumentType');
    $("[id^=documentType3]").addClass('hideDocumentType');
    $("[id^=noneSelected]").removeClass('hideNoneSelected3');
  }
});
// Data and management information (MI) reports (Document type 4)
$("[id^=selectDocumentType4]").click(function () {
  if ($("[id^=documentType4]").hasClass('hideDocumentType')) {
    $("[id^=documentType4]").removeClass('hideDocumentType');
    $("[id^=documentType4]").addClass('showDocumentType');
    $("[id^=noneSelected]").addClass('hideNoneSelected4');
  }
  else {
    $("[id^=documentType4]").removeClass('showDocumentType');
    $("[id^=documentType4]").addClass('hideDocumentType');
    $("[id^=noneSelected]").removeClass('hideNoneSelected4');
  }
});
// Local authority (LA) student number summaries (Document type 5)
$("[id^=selectDocumentType5]").click(function () {
  if ($("[id^=documentType5]").hasClass('hideDocumentType')) {
    $("[id^=documentType5]").removeClass('hideDocumentType');
    $("[id^=documentType5]").addClass('showDocumentType');
    $("[id^=noneSelected]").addClass('hideNoneSelected5');
  }
  else {
    $("[id^=documentType5]").removeClass('showDocumentType');
    $("[id^=documentType5]").addClass('hideDocumentType');
    $("[id^=noneSelected]").removeClass('hideNoneSelected5');
  }
});
// Non maintained special school allocation statements (Document type 6)
$("[id^=selectDocumentType6]").click(function () {
  if ($("[id^=documentType6]").hasClass('hideDocumentType')) {
    $("[id^=documentType6]").removeClass('hideDocumentType');
    $("[id^=documentType6]").addClass('showDocumentType');
    $("[id^=noneSelected]").addClass('hideNoneSelected6');
  }
  else {
    $("[id^=documentType6]").removeClass('showDocumentType');
    $("[id^=documentType6]").addClass('hideDocumentType');
    $("[id^=noneSelected]").removeClass('hideNoneSelected6');
  }
});