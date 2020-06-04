
## JS Advanced React - Redux  - Proiect Examen 
## Autor: Roxana Scutaru 
### **Descrierea priectului**

Proiectul a fost realizat in JavaScript. Funcționalitățile incluse in proiect sunt prezentate mai jos:
  - React Router pentru a construi rutele
 -  Redux pentru state management
 -  Câteva clase de Bootstrap

### **Pagina 1**
Pe prima pagină(ruta /home) se regaseste un formular cu următoarele informații: nume, prenume, meserie, salariu, data angajării.

La submiterea formularului, informațiile completate de utilizator sunt salvate, pentru a fi ulterior afișate într-o altă pagină.

Pentru salvarea state-ului am folosit Redux.

Pe lângă butonul de submit, în pagină se găseste și un buton care redirectează catre o altă pagină (/people).

### **Pagina 2**
În cea de-a doua pagină(ruta /people) se găsesc persoanele introduse din formular, afișate sub formă de listă. În partea stângă a listei se afla 5 butoane (sau checkbox-uri): 2 precedate de titlul “Sortează după”: ” nume” și “preț” și 3 precedate de titlul “Filtrează după preț”: “<2500”, “2500-4000”, “>4000”.

 Două butoane(checkbox-uri) sorteaza persoanele(după nume, respectiv după preț), Iar 3 butoane(checkbox-uri) filtreaza persoanele afișate, pentru intervalele de preț menționate mai sus.

De asemenea, pagina conține un buton prin care ne întoarcem la formularul de submitere a datelor(ruta /home).

### **Alte aspecte ale proiectului**
Când dăm refresh la pagina 2. sau când revenim în ea din pagina 1. persoanele sunt afișate după ordinea inițială. (Când filtrăm sau sortăm nu pierdem array-ul inițial).



