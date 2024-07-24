// import React from 'react'

// const General = (props) => {
//   return (
// <div className="sd-bundle-bundleSection-common sd-bundle-createBundleNamingSection">
// <div className="sd-bundle-bundleSection-heading-common">
//       General
//     </div>
//     <div className="sd-bundle-nameBlock">
//     <label className="sd-bundle-plainText-common">Name*</label>
//     <input
//         type="text"
//         className="sd-bundle-name"
//         placeholder=""
//         value={props.data.name}
//         onChange={(e) =>
//           props.setData({
//             ...(props.data),
//             name: e.target.value,
//           })
//         }
//         onBlur={(e) =>{
//           let E = e.target.value.replace(/\s+/g, ' ')
//             props.setData({
//               ...(props.data),
//               name: E.trim()
//             })
//           }
//         }
//       />
//       <p className="sd-bundle-createBundleSectionDisclaimer">
//         This name is used for you to identify this bundle.Your
//         customers won’t see this name.
//       </p>
//     </div>
//     <div className="sd-bundle-nameBlock">
//     <label className="sd-bundle-plainText-common">Title*</label>
//     <input
//         type="text"
//         className="sd-bundle-name"
//         placeholder=""
//         value={props.data.title}
//         onChange={(e) =>
//           props.setData({
//             ...(props.data),
//             title: e.target.value,
//           })
//         }
//         onBlur={(e) =>{
//           let E = e.target.value.replace(/\s+/g, ' ')
//             props.setData({
//               ...(props.data),
//               title: E.trim()
//             })
//           }
//         }
//       />
//       <p className="sd-bundle-createBundleSectionDisclaimer">
//       Customers will see this as the name of the bundle displayed .
//       </p>
//     </div>
//     {props.data.type =='collectionMixMatch' &&
//       <div className="sd-bundle-nameBlock">
//         <label className="sd-bundle-plainText-common">Bundle description</label>
//         <input
//             type="text"
//             className="sd-bundle-name"
//             placeholder=""
//             value={props.data.bundleDetail.description}
//             onChange={(e) =>
//               props.setData({
//                 ...(props.data),
//                 bundleDetail:{ ...props.data.bundleDetail,
//                   description: e.target.value,
//                 }
//               })
//             }
//           />
//           <p className="sd-bundle-createBundleSectionDisclaimer">
//             Provide an explanation of the selection limit within this bundle to ensure user awareness..
//           </p>
//       </div>
//     }

//     {props.data.type =="productMixMatch" &&
//     <div className="sd-bundle-nameBlock">
//         <label className="sd-bundle-plainText-common">Bundle description</label>
//         <input
//             type="text"
//             className="sd-bundle-name"
//             placeholder=""
//             value={props.data.description}
//             onChange={(e) =>
//               props.setData({
//                 ...(props.data),
//                 description: e.target.value,
//               })
//             }
//           />
//           <p className="sd-bundle-createBundleSectionDisclaimer">
//             Provide an explanation of the selection limit within this bundle to ensure user awareness..
//           </p>
//       </div>
//     }
    

// </div>
//   )
// }

// export default General
import React from 'react' ;

const General = (props) => {


  const handleInputChange=(e,element) =>{
 
    if ((e.target.value[0]==" ") ||  (e.target.value.length >1 &&  e.target.value.at(-2) == " " && e.target.value.at(-1)== " ")){
      return ;
    }

    props.setData({
      ...(props.data),
      [element]:e.target.value,
    })
  }


  return (
<div className="sd-bundle-bundleSection-common sd-bundle-createBundleNamingSection">
<div className="sd-bundle-bundleSection-heading-common">
      General
    </div>
    <div className="sd-bundle-nameBlock">
    <label className="sd-bundle-plainText-common">Name</label>
    <input
        type="text"
        className="sd-bundle-name"
        placeholder=""
        value={props.data.name}
        onChange={(e)=>handleInputChange(e,"name")}
      />
      <p className="sd-bundle-createBundleSectionDisclaimer">
        *This name is used for you to identify this bundle.Your
        customers won’t see this name.
      </p>
    </div>
    <div className="sd-bundle-nameBlock">
    <label className="sd-bundle-plainText-common">Title</label>
    <input
        type="text"
        className="sd-bundle-name"
        placeholder=""
        value={props.data.title}
        onChange={(e)=>handleInputChange(e,"title")}
      />
      <p className="sd-bundle-createBundleSectionDisclaimer">
      *Customers will see this as the name of the bundle displayed .
      </p>
    </div>
    {props.type !=='FrequentlyBoughtTogether' &&
      <div className="sd-bundle-nameBlock">
        <label className="sd-bundle-plainText-common">Bundle description</label>
        <input
            type="text"
            className="sd-bundle-name"
            placeholder=""
            value={props.data.description}
            onChange={(e)=>handleInputChange(e,"description")}
          />
          <p className="sd-bundle-createBundleSectionDisclaimer">
            *Provide an explanation of the selection limit within this bundle to ensure user awareness..
          </p>
      </div>
    }
    

</div>
  )
}

export default General