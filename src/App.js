import Layout from "./component/layout/layout.jsx";


function App(){
  
  return(
    <Layout>
    {/* // {children} */}
    <div id="accueil" className="bg-gray-300 min-h-screen">
      <div className="text-3xl  font-bold">Accueil</div>
    </div>
    </Layout>
  );
};
export default App;