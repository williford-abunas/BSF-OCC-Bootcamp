// const getData = (callback) => {
//   setTimeout(() => {
//     const data = 'This is the data'
//     callback(data)
//   }, 3000)
// }

// const processData = (data) => {
//   console.log('Processed data:', data)
// }

// getData(processData)

//callbackHEll
// const step1 = (callback) => {
//   setTimeout(() => {
//     console.log('Step 1 is complete,')
//     callback()
//   }, 5000)
// }

// const step2 = (callback) => {
//   setTimeout(() => {
//     console.log('Step 2 is complete,')
//     callback()
//   }, 6000)
// }

// const step3 = () => {
//   setTimeout(() => {
//     console.log('Step 3 is complete')
//     console.log('Request complete, all steps done!')
//   }, 7000)
// }

// //Nested callbacks
// step1(() => {
//   step2(() => {
//     step3()
//   })
// })

///////Promises
const step1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Step 1 complete.')
      resolve()
    }, 5000)
  })
}

const step2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Step 2 complete.')
      resolve()
    }, 6000)
  })
}

const step3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Step 3 complete.')
      resolve()
    }, 7000)
  })
}

//chaining Promises
// step1()
//   .then(step2)
//   .then(step3)
//   .then(() => {
//     console.log('All steps completed')
//   })
//   .catch((error) => {
//     console.error('Error', error)
//   })
const runSteps = async () => {
  try {
    await step1()
    await step2()
    await step3()
    console.log('All steps completed.')
  } catch (error) {
    console.error('Error:', error)
  }
}

runSteps()
