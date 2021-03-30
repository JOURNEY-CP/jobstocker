const addNewJob= (ref,job) =>{
    ref('jobs').push(job)
}
const getAllJobs = (jobs) =>{
    return 'jobs';
}
export  {addNewJob,getAllJobs};