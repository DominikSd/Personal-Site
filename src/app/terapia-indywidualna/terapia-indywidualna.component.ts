import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terapia-indywidualna',
  templateUrl: './terapia-indywidualna.component.html',
  styleUrls: ['./terapia-indywidualna.component.scss']
})
export class TerapiaIndywidualnaComponent implements OnInit {
  ngOnInit(): void {
    this.setupScrollAnimation();
  }

  setupScrollAnimation(): void {
    window.addEventListener('scroll', () => {
      const elements = document.querySelectorAll('.text-content');
      const scrollTop = window.scrollY;

      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top + window.scrollY;
        if (scrollTop > elementTop - window.innerHeight + 150) {
          el.classList.add('visible');
        }
      });
    });
  }
}
