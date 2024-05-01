import NavComponentes from "./NavComponentes";
export default function SubNavbar (){
return (
    <>
    <nav>
    <div className="sub-navigation">
<NavComponentes nombre='PCs de Escritorio'/>
<NavComponentes nombre='Notebooks'/>
<NavComponentes nombre='Placas de Video'/>
<NavComponentes nombre='Monitores'/>
<NavComponentes nombre='Micros'/>
        </div>
    </nav>
    </>
)
}