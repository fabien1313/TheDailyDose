const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="new-post-title"]').value;
    const content = document.querySelector('textarea[name="new-post-content-title"]').value;
  
    await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dash');
  };
  
  document
    .querySelector('#submit-btn-create')
    .addEventListener('click', newFormHandler);