export const postsRequest = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  // Цей блок потрібен тільки тоді, коли ви працюєте з fetch, якщо ви 
  // використовуєте axios, цей блок можна пропустити
  if(!response.ok) { 
    throw new Error('Upss, some error occured:' + response);
  }
        
  return await response.json();
};
