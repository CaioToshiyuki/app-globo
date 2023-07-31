import Card from './Card';
import MainNews from './MainNews';
import HeaderLinks from '../header/HeaderLinks';
import button from './Button.css';
import { Routes, Route } from 'react-router-dom';

export default () => (
    <div className="Home">
        <HeaderLinks />

        <section className="main_container">
            <div className="main_grid">

                <MainNews title="Após ataque em creche, SC botará policial armado em cada escola estadual"
                    subtitle1="Como foi o primeiro dia na volta às aulas de escola após ataque em SP"
                    subtitle2="Dino se reúne com redes sociais para discutir violência nas escolas"
                    subtitle3="Ministério pede exclusão de 431 contas com tags sobre ataque a escolas"
                    color="rgba(196, 23, 12, 1)" />

                <div class="row">

                    <Card title="Lula elogia Haddad e critica juros: 'Estão brincando com país'"
                        subtitle1="Quais foram os 7 recados de Lula a ministros"
                        color="rgba(196, 23, 12, 1)"
                        image="https://static.poder360.com.br/2023/07/lula-live-18jul2023-6-848x477.jpeg" />

                    <Card title="Aeroporto no DF: MP pede condenação de acusados após bomba"
                        subtitle1="Torres pede a Moraes revogação da prisão"
                        subtitle2="PF apura se facção tinha alvos além de Moro no DF"
                        color="rgba(196, 23, 12, 1)" />

                    <Card title="Quem é o cantor de brega funk morto em acidente aos 24"
                        subtitle1="Perícia cita forte impacto e avarias no carro"
                        color="rgba(196, 23, 12, 1)"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcCBudeKXoDFA4S28nmgXyDe19HnO4mLrEV_lLykKGYPkB-uOkv271EafkywnUxvMHGg&usqp=CAU" />

                    <Card title="Quem é o calvo da ITA Jr"
                        subtitle1="Perícia cita Silveirinha como forte candidato"
                        color="rgba(196, 23, 12, 1)"
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRdDZf-80aO_QRKw1xt2qlPKoFU0oqR0fWZ6G-BERjmh5jM9mkZoLAcowLT5rv3MJsqHY&usqp=CAU' />

                </div>

                <div className="column1">

                    <Card title="Vasco anuncia a saída do Nenê, mas já remarca a volta do ídolo para 2024"
                        subtitle1="Nenê chora em vídeo e afirma: 'A gente nunca está preparado'"
                        color="rgba(6, 170, 72, 1)"
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZQfZvYeRbCrq_sUjUPNP8gEkpWoMBi9fDHg2aZIUb2PWNkIwulyd3AFJ-YE7H_L6kNU&usqp=CAU' />

                    <Card title="Jorge Jesus é o plano A do Flamengo para lugar de Vítor Pereira, diz Eric Faria"
                        subtitle1="Elenco do Fla se divide na falta de comando, que vai além de VP"
                        color="rgba(6, 170, 72, 1)"
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqHWRNCQpKN_IuPyfMyVmRy2b3IWDM1HeB6oL0plCt7fHQ07FnXzvqlJcDRkPoSWsWgw&usqp=CAU' />

                    <Card title="Arias detalha preleção de Diniz e diz: 'Parecia Deus'"
                        subtitle1="Thiago Silva celebra conquista de Marcelo e ironiza críticas"
                        color="rgba(6, 170, 72, 1)" />

                    <Card title="Abel afirma ter propostas e abre jogo sobre futuro"
                        color="rgba(6, 170, 72, 1)" />
                </div>

                <div className="column2">

                    <Card title="Ricardo escuta conversa atrás da porta e grava imagem escondido"
                        subtitle1="Cezar flagra Ricardo filmando com celular e interpela o brother"
                        color="rgba(255, 103, 0, 1)"
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRObd-0_ZdDLY4vdr4B_pzDBh3Uu8CEemXx90-L0C22R4ZA8gewekgGxzJDCvsgMOet2AU&usqp=CAU' />

                    <Card title="Sisters expõem incômodo, e Cezar dispara contra elas: 'Não sou cachorro'"
                        color="rgba(255, 103, 0, 1)"
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7jJvaWN9dSprfwLayEfjxXmat58ELmhRCftyMClCvEt8vx3kmKMZWAW7EZFaeD4eqgw&usqp=CAU' />

                    <Card title="Bruna, Fred ou Sarah: quem você quer eliminar?"
                        color="rgba(255, 103, 0, 1)"
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2J-a2xjBGN-ihFuVUAVqjf7RD0U70jeY1Nrh861AIewkyn_UwKPXzdg7s1xle9zV-xy0&usqp=CAU' />

                    <button className="ButtonVote"><span>Vote Agora</span></button>
                </div>


            </div>

        </section>
    </div>
)