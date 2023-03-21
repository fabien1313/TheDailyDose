const commentFormHandler = async function(event) {
    event.preventDefault();
  
    const post_id = document.querySelector('input[name="post_id"]').value;
    const comment_content = document.querySelector('textarea[name="make-a-comment"]').value;
  
    if (comment_content) {
      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          post_id,
          comment_content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }

    alert(response.statusText);
  };
  
  document
    .querySelector('.comment-btn-create')
    .addEventListener('click', commentFormHandler);