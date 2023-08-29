import React from 'react';
import './../../firebase';

const CheckIn = () => {
  return (
    <div>
      <div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Check In</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div>
            <p>Please, enter the guest's name:</p>
            <input type='text' placeholder="Guest's Name"/>
        </div>
        <div>
            <p>Please, enter the approximate date of guest checkout:</p>
            <input type='date' placeholder="Select date"/>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Check In</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default CheckIn
