const createURL = (path) => {
    return window.location.origin + path
}

export const createNewEntry = async () => {
    const res = await fetch(
      new Request(createURL('/api/journal'), {
        method: 'POST',
      })
    )
  
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('Something went wrong on API server!')
    }
  }