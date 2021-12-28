import { TextRowSection } from '../../../../core/layout/models/section.model';
import { Component, Input } from '@angular/core';
import { Site } from '../../../../core/shared/site.model';
import { LocaleService } from '../../../../core/locale/locale.service';


@Component({
  selector: 'ds-text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.scss'],
})
export class TextSectionComponent {

  content: string;
  @Input()
  sectionId: string;

  @Input()
  textRowSection: TextRowSection;

  @Input()
  site: Site;

  constructor(
    private locale: LocaleService,
  ) {
  }

  ngOnChanges(changes) {
    if (changes.site && this.site) {
      if (this.site.metadata && this.textRowSection.content) {
        const mdv = this.site.firstMetadataValue(this.textRowSection.content,
          { language: this.locale.getCurrentLanguageCode() });
        this.content = mdv ?? '';
      }
    }
  }
}