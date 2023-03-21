const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="edit-post-title"]').value;
  const content = document.querySelector('textarea[name="edit-post-content-title"]').value;
  const post_id = document.querySelector('input[name="post_id"]').value;
  

  await fetch(`/api/posts/${post_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dash');
};



document
  .querySelector('#submit-btn-edit')
  .addEventListener('click', editFormHandler);
;
