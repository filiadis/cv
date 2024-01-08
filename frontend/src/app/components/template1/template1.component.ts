import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { InfoComponent } from './info/info.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';

@Component({
  selector: 'app-template1',
  standalone: true,
  imports: [TitleComponent, InfoComponent, SkillsComponent, WorkComponent],
  templateUrl: './template1.component.html',
  styleUrl: './template1.component.css',
})
export class Template1Component {}
