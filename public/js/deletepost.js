const post_id = document.querySelector('input[name="post_id"]').value;

const deleteClickHandler = async function() {
    await fetch(`/api/posts/${post_id}`, {
      method: 'DELETE'
    });
  
    document.location.replace('/dash');
  };


  document
  .querySelector('#delete-btn-edit')
  .addEventListener('click', deleteClickHandler);