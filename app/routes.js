const express = require('express')
const router = express.Router()

// Add your routes below here - above the module.exports line

// Publish documents page confirmation (documents-to-publish-confirm-14to16 - publish - yes/no?) route
// Branching for publish 14 to 16 document type
router.post('/v7/document-exchange/publish-14-to-16-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    const publish14to16 = req.session.data['publish-14-to-16']
  
    if (publish14to16 === 'true') {
      res.redirect('/v7/document-exchange/confirmation-14to16')
    } else {
      res.redirect('/v7/document-exchange/publish-documents')
    }
  })

  // Add your routes here - above the module.exports line

module.exports = router
