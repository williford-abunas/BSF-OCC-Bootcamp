const getData = () => {
  setTimeout(() => {
    const data = 'This is the data'
  })
}

const processData = (data) => {
  console.log('Processed data:', data)
}

getData(processData)
