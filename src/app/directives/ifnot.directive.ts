import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[appIfnot]"
})
export class IfnotDirective {
  @Input("appIfnot") set Ifnot(condition: boolean) {
    if (!condition) {
      this.ViewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.ViewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private ViewContainer: ViewContainerRef
  ) {}
}
