const addNewJob= (ref,job) =>{
    console.log(ref('jobs'));
    ref('jobs').push(job)
}
const getAllJobs = (jobs) =>{
    console.log(jobs);
    return 'jobs';
}
export  {addNewJob,getAllJobs};