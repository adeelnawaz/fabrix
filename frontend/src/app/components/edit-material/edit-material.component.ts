import { Component, OnInit } from '@angular/core';
import {AuthorisationService, StoffeService} from '../../services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Stoffe, User} from '../../models';
import {faChevronCircleLeft, faPlus, faUserMinus} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {HttpErrorResponse} from "@angular/common/http";
import RoleEnum = User.RoleEnum;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-edit-material',
  templateUrl: './edit-material.component.html',
  styleUrls: ['./edit-material.component.css']
})
export class EditMaterialComponent implements OnInit {
  faUserMinusIcon = faUserMinus;
  faPlusIcon = faPlus;
  faChevronCircleLeftIcon = faChevronCircleLeft;

  materialList: Array<Stoffe> = [];
  selectedMaterial: Stoffe;

  materialForm: FormGroup;
  materialFormSubmitAttempt: boolean;

  headElements = ['Id', 'name', 'material composition', 'product group', 'weight', 'surface look', 'thickness', 'commercial fabric name', 'Actions'];

  public page = 1;
  public pageSize = 10;

  closeResult = '';
  error: HttpErrorResponse;
  constructor(private stoffeService: StoffeService,
              private authorisationService: AuthorisationService,
              private router: Router,
              config: NgbModalConfig,
              private modalService: NgbModal,
              private fB: FormBuilder) {
    // Konfiguration des modalen Dialogs
    config.backdrop = 'static';   // schliesst nicht, wenn man in das Fenster dahinter klickt
    config.keyboard = false;      // Modaler Dialog kann nicht durch ESC beendet werden
    // Formular fuer delete
    this.materialForm = this.fB.group(
      {
        idControl: ['', Validators.required],
        firstNameControl: ['', Validators.required],
        lastNameControl: ['', Validators.required],
        emailControl: ['', Validators.required],
      }
    );
  }
  ngOnInit(): void {
    this.getMaterialData();
  }
  getMaterialData(): void {
    this.stoffeService.getAll().subscribe((res) => {
      this.materialList = res as Stoffe[];
      // TODO this line should be deleted just for debugging
       console.log(this.materialList);
    });
  }
  hasAccess(roles)
  {
    return this.authorisationService.hasAccess(roles);
  }
  // hier noch material.name nach hinzugefügte person ändern..
  adminAdded(material: Stoffe): boolean {
    if (material.name === 'RoleEnum.admin')
    {
      return true;
    }
  }
  addMaterial(material: Stoffe) {
    this.stoffeService.create(material).subscribe(u => this.setMaterials());
  }
  readOne(id: string): void {
    this.stoffeService.getDataById(id).subscribe(
      (response: Stoffe) => this.selectedMaterial = response,
      error => this.error = error,
    );
  }
  deleteOne(id: string): void {
    this.stoffeService.delete(id);
    window.location.reload();
  }
  open(content, id: string): void {
    this.readOne(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
      if (result === 'delete')
      {
        this.deleteOne(this.selectedMaterial.id);
      }
    });
  }
  private setMaterials(): void {
    this.stoffeService.getAll().subscribe(m => {
      this.materialList = m;
    });
  }

}
