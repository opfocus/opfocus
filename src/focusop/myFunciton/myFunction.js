export  const handleSubmit = async (e, url) => {
  e.preventDefault()
  
  const formData = new FormData(e.target)
  const request = Object.fromEntries(formData.entries())
  const options = {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(request)
  }

    let result
  await fetch(url, options)
    .then(res => res.json())
    .then(data => result = data)
  return [result]
}