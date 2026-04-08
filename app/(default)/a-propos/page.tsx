import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 px-8 max-w-screen-2xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tighter mb-8">À Propos de Cyris Cars</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-xl text-on-surface-variant leading-relaxed">
          Bienvenue chez Cyris Cars, votre partenaire de confiance pour la location de véhicules premium. 
          Nous nous engageons à offrir une expérience de conduite exceptionnelle à travers une flotte soigneusement sélectionnée.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
