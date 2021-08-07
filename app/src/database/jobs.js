import firebase from 'firebase';
const addNewJob= (ref,job) =>{
    ref('jobs').push({...job,createdAt: firebase.database.ServerValue.TIMESTAMP})
}
const updateJobStatus= (ref,uid,jobId,status) =>{
//     const prevStatus=ref(`jobs/${uid}/${jobId}`);
//     const applied=ref(`jobs/${jobId}/applied`);
//     const rejected=ref(`jobs/${jobId}/rejected`);
//     console.log(prevStatus,applied,rejected,'jobs');
    // if(prevStatus===status)return;
    // if(status==="APPLIED"){
    //     ref(`jobs/${jobId}/applied`).set(+1);
    //     if(prevStatus==="CANCELLED"){
    //         ref(`jobs/${jobId}/rejected`).set(-1);
    //     }
    // }
    // if(status==="CANCELLED"){
    //     ref(`jobs/${jobId}/rejected`).set(ref(`jobs/${jobId}/rejected`)+1);
    //     if(prevStatus==="APPLIED"){
    //         ref(`jobs/${jobId}/applied`).set(ref(`jobs/${jobId}/applied`)-1);
    //     }
    // }
    ref(`status/${uid}/${jobId}`).set(status);
}
const getAllJobs = (jobs) =>{
    return 'jobs';
}
const getStatus=uid=>{
    return 'status/'+uid;
}
export  {addNewJob, updateJobStatus,getAllJobs,getStatus};