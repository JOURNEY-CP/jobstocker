import firebase from 'firebase';
const addNewJob= (ref,job) =>{
    ref('jobs').push({...job,createdAt: firebase.database.ServerValue.TIMESTAMP

    })
}
const getAllJobs = (jobs) =>{
    return 'jobs';
}
export  {addNewJob,getAllJobs};