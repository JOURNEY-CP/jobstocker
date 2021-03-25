const addNewJob= (ref,job) =>{
    ref('jobs').push(job)
}
const getAllJobs = (jobs) =>{
    console.log(jobs);
    return 'jobs';
}
export  {addNewJob,getAllJobs};