import {ArrowRight,ShoppingBag,Sparkles,Store,Scissors,PackageCheck} from "lucide-react";
const cards=[
 {icon:ShoppingBag,title:"Loja",text:"Produtos físicos e digitais em uma experiência simples e rápida."},
 {icon:Scissors,title:"Sites para beleza",text:"Sistema completo para salões e barbearias, com agenda e gestão."},
 {icon:PackageCheck,title:"Entrega nacional",text:"Produtos físicos enviados pelos Correios para todo o Brasil."}
];
export default function Home(){return <main>
<header><div className="brand"><span>R</span>REVER STORE</div><nav><a href="#explorar">Explorar</a><a href="#negocios">Para negócios</a><button>Entrar</button></nav></header>
<section className="hero"><div className="pill"><Sparkles size={15}/> Uma nova forma de comprar e crescer</div><h1>Mais que uma loja.<br/><em>Um ecossistema.</em></h1><p>Produtos que você quer. Tecnologia para o seu negócio. Tudo em uma experiência criada pela Rever.</p><div className="actions"><a className="primary" href="#explorar">Explorar produtos <ArrowRight size={18}/></a><a className="secondary" href="#negocios">Conhecer Rever para negócios</a></div></section>
<section id="explorar" className="cards">{cards.map(({icon:Icon,title,text})=><article key={title}><div className="ico"><Icon/></div><h2>{title}</h2><p>{text}</p><a href="#">Descobrir <ArrowRight size={16}/></a></article>)}</section>
<section id="negocios" className="business"><div><small>REVER PARA NEGÓCIOS</small><h2>Seu salão. Sua marca.<br/>Seu próprio site.</h2><p>Agenda, profissionais, serviços, clientes e financeiro em um sistema feito para funcionar no celular.</p><button>Quero conhecer <ArrowRight size={18}/></button></div><div className="phone"><div className="phoneTop"><Store size={18}/> Studio Aurora</div><div className="metric"><span>Agenda de hoje</span><b>8 atendimentos</b></div><div className="appointment"><i>09:00</i><div><b>Corte + Escova</b><span>Mariana • Ana</span></div></div><div className="appointment"><i>10:30</i><div><b>Coloração</b><span>Camila • Júlia</span></div></div><div className="appointment"><i>13:00</i><div><b>Manicure</b><span>Beatriz • Ana</span></div></div></div></section>
</main>}
