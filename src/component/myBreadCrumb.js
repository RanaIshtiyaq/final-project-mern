import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React from 'react';

function MyBreadcrumb() {
  return (
      <div className='row Breadcrumb mx-3 mt-4'>
          <div className='col-6 text-start pt-1 myBlue'><h4 >Form Name</h4></div>
          <div className='col-6 text-end'>
          <Breadcrumb className='float-right pt-1 '> 
            <Breadcrumb.Item className='mx-3' href="/home">Home</Breadcrumb.Item>
       <Breadcrumb.Item active href="/">
         Form Name
       </Breadcrumb.Item>
    </Breadcrumb> 
          </div>

      </div>

//          <Breadcrumb className='mt-4 mx-3 Breadcrumb'>
// <h4 className='mx-3'>Form Name</h4>
          
//            <Breadcrumb.Item className='mx-3' href="/home">Home</Breadcrumb.Item>
//       <Breadcrumb.Item active href="/">
//         Form Name
//       </Breadcrumb.Item>
//     </Breadcrumb> 
  );
}

export default MyBreadcrumb;