import { Routes } from '@angular/router';
import { AddEmpolyeComponent } from './Component/add-empolye/add-empolye.component';
import path from 'path';
import { Component } from '@angular/core';
import { ForComponent } from './Component/ControlFlow/for/for.component';
import { IfElseComponent } from './Component/ControlFlow/if-else/if-else.component';
import { SwitchComponent } from './Component/ControlFlow/switch/switch.component';
import { DataBindingComponent } from './Component/data-binding/data-binding.component';
import { StructureDirComponent } from './Component/Directive/structure-dir/structure-dir.component';
import { GetApiComponent } from './Component/get-api/get-api.component';
import { PipeComponent } from './Component/Pipe/pipe/pipe.component';
import { PostApiComponent } from './Component/PostApi/post-api/post-api.component';
import { ReactiveFormComponent } from './Component/ReactiveForm/reactive-form/reactive-form.component';

export const routes: Routes = [
    {
        path:"addemp",
        component:AddEmpolyeComponent,

    },
    {
        path:"forComponent",
        component:ForComponent
    },

    {
        path:"IfElseComponent",
        component:IfElseComponent,

    },
    {
        path:"SwitchComponent",
        component:SwitchComponent
    },

    {
        path:"DataBindingComponent",
        component:DataBindingComponent,

    },
    {
        path:"StructureDirComponent",
        component:StructureDirComponent,
    },

    {
        path:"GetApiComponent",
        component:GetApiComponent,

    },
    {
        path:"PipeComponent",
        component:PipeComponent
    },

    {
        path:"PostApiComponent",
        component:PostApiComponent,

    },
    {
        path:"ReactiveFormComponent",
        component:ReactiveFormComponent
    },

];

