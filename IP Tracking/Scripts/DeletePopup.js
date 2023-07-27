<script>
    function confirmDelete(event) {
        event.preventDefault(); // Prevent the default link behavior

    // Get the target URL from the link's href attribute
    var url = event.target.href;

    // Create a Bootstrap modal dialog
    var modal = $('<div class="modal fade" id="deleteConfirmationModal" tabindex="-1" role="dialog" aria-labelledby="deleteConfirmationModalLabel" aria-hidden="true">\
        <div class="modal-dialog modal-dialog-centered" role="document">\
            <div class="modal-content">\
                <div class="modal-header">\
                    <h5 class="modal-title" id="deleteConfirmationModalLabel">Delete Confirmation</h5>\
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                        <span aria-hidden="true">&times;</span>\
                    </button>\
                </div>\
                <div class="modal-body">\
                    Are you sure you want to delete this record?\
                </div>\
                <div class="modal-footer">\
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>\
                    <a href="' + url + '" class="btn btn-danger">Delete</a>\
                </div>\
            </div>\
        </div>\
    </div>');

    // Append the modal to the page body
    $('body').append(modal);

    // Show the modal
    modal.modal('show');
    }
</script>
