import React from 'react';
import TempoMedio from './TempoMedio';
import EmissaoNF from './EmissaoNF';
import TempoMedioPorHora from './TempoMedioPorHora';
import NFPendentes from './NFPendente';
import TOP10Un from './TOP10Un';
import QtdeErrosSEFAZ from './QtdeErrosSEFAZ';
import Navbar from './NavBar';

export default function Dashboard() {
  return <div className="dashboard">
    <Navbar />
    <div className="grid">
      <div className="one">
        <EmissaoNF />
        <TempoMedio />
      </div>
      <div className="two">
        <NFPendentes />
        <TempoMedioPorHora />
      </div>
      <div className="three">
        <TOP10Un />
        <QtdeErrosSEFAZ />
      </div>
    </div>
  </div>;
}
