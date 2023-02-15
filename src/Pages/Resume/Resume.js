// // import { useQuery } from '@tanstack/react-query';
// // import React, { useContext} from 'react';
// // import { FaFileDownload, FaRegEnvelope } from 'react-icons/fa';
// // import { Link } from 'react-router-dom';
// // import { AuthContext } from '../../contexts/AuthProvider';
// // import jsPDF from 'jspdf'

// // const Resume = () => {
// //     const {user} = useContext(AuthContext); 

// //     const { data: candidate } = useQuery({
// //         queryKey: [""],
// //         queryFn: async () => {
// //           try {
// //             const res = await fetch(`http://localhost:5000/user/${user?.email}`, {
// //             });
// //             const data = await res.json();
// //             // console.log(data)
// //             return data;
// //           } catch (error) { }
// //         },
// //       });
// //     console.log(candidate);

// //     const generatePDF = () => {
// //       const doc = new jsPDF("p","pt","a4"); 
// //       doc.html(document.querySelector('#content'), {
// //         callback: function(pdf){
// //           const pageCount = doc.internal.getNumberOfPages(); 
// //           // pdf.deletePage(pageCount); 
// //           pdf.save('myresume.pdf')
// //         }

// //       })

// //     }
    
// //     return (
// //         <div id='content' className='py-10'>
// //           <h1 className='py-20'>
// //             This is my resume
// //           </h1>
// //           <p>{candidate?.name}</p>
// //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita obcaecati consequatur, ipsa ipsum iure dolor soluta accusamus in non! Saepe ex fugit nulla culpa voluptatibus ab laborum itaque aspernatur!</p>
// //           <p>{candidate?.email}</p>
// //           <button onClick={generatePDF} type='primary'>download resume</button>
// //         </div>
// //     );
// // };

// // export default Resume;
// // import React from "react";
// // import ReactDOM from "react-dom";
// // import ReactToPdf from "react-to-pdf"

// // import "./Resume.css";
// // const ref = React.createRef();

// // function Resume() {
// //   return (
// //     <div>
// //     <ReactToPdf targetRef={ref} filename="div-blue.pdf">
// //         {({toPdf}) => (
// //             <button onClick={toPdf}>Generate pdf</button>
// //         )}
// //     </ReactToPdf>
// //     <div style={{width: 500, height: 500, background: 'blue'}} ref={ref}/>
// // </div>
// //   );
// // }
// // export default Resume; 
// import React from 'react';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

// // Create Document Component
// const Resume = () => (
//   <div>
//     <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text><p className='py-10 md:w-4/5 mx-auto'>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt labore quas placeat accusantium debitis quasi enim. Et veniam reprehenderit quo illum praesentium obcaecati voluptates accusantium unde architecto corporis! Obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt labore quas placeat accusantium debitis quasi enim. Et veniam reprehenderit quo illum praesentium obcaecati voluptates accusantium unde architecto corporis! Obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt labore quas placeat accusantium debitis quasi enim. Et veniam reprehenderit quo illum praesentium obcaecati voluptates accusantium unde architecto corporis! Obcaecati.</p></Text>
//       </View>
//     </Page>
//   </Document>
//   </div>
// );

// export default Resume; 