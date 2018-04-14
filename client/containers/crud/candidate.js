import React from 'react';
import PropTypes from 'prop-types';
import {
  List, Show, Edit, Create, EditPopup, Filter, Datagrid, RadioButtonGroupInput,
  SimpleShowLayout, SimpleForm, TabbedForm, FormTab, LatLngField, FileInput, ImageField,
  ReferenceField, DateField, NumberField, TextField, ChipField, BooleanField,
  NumberInput, DateInput, DisabledInput, LongTextInput, SelectInput, SelectArrayInput, ReferenceInput,
  TextInput, BooleanInput, AutocompleteInput, LatLngInput, EditButton, ComboButton,
  required, minLength, maxLength, minValue, maxValue, number, regex, choices,
} from 'admin-on-rest';

const CandidateFilter = props => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
  </Filter>
);

export const CandidateList = props => (
  <List {...props} filters={<CandidateFilter />}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='lastname' />
      <TextField source='firstname' />
      <TextField source='email' />
      <DateField source='updatedDate' showTime />
      <EditButton />
    </Datagrid>
  </List>
);

const CandidateTitle = ({ record }) => <span>{record ? `${record.lastname} ${record.firstname}` : ''}</span>;

CandidateTitle.propTypes = {
  record: PropTypes.object,
};

export const CandidateShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='lastname' />
      <TextField source='firstname' />
      <TextField source='email' />
      <DateField source='birthday' showTime />
      <TextField source='gender' />
      <TextField source='description' label='generic.description'/>
      <ChipField source='tag' label='generic.tag'/>
      <DateField source='updatedDate' showTime />
      <ReferenceField allowEmpty source='updaterId' reference='users'>
        <TextField source='email' />
      </ReferenceField>
      <DateField source='createdDate' showTime />
      <ReferenceField allowEmpty source='creatorId' reference='users'>
        <TextField source='email' />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

export const CandidateEdit = props => (
  <Edit title={<CandidateTitle />} {...props}>
    <TabbedForm>
      <FormTab label='generic.general'>
        <DisabledInput source='id' />
        <TextInput source='lastname' validate={[ required ]} />
        <TextInput source='firstname' validate={[ required ]} />
        <TextInput source='email' type="email" validate={[ required ]} />
        <DateInput source='birthday' showTime />
        <TextInput source='nationality' validate={[ required ]} />
        <RadioButtonGroupInput source="gender" choices={[
          { id: 'male', name: 'Male' },
          { id: 'female', name: 'Female' },
        ]} />
        <TextInput source='description' label='generic.description'/>
        <SelectArrayInput source='tag' label='generic.tag'/>
      </FormTab>
      <FormTab label='generic.metadata'>
        <DateField source='updatedDate' showTime />
        <ReferenceField allowEmpty source='updaterId' reference='users'>
          <TextField source='email' />
        </ReferenceField>
        <DateField source='createdDate' showTime />
        <ReferenceField allowEmpty source='creatorId' reference='users'>
          <TextField source='email' />
        </ReferenceField>
      </FormTab>
    </TabbedForm>
  </Edit>
);

export const CandidateCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='lastname' validate={[ required ]} />
      <TextInput source='firstname' validate={[ required ]} />
      <TextInput source='email' type="email" validate={[ required ]} />
      <DateInput source='birthday' showTime />
      <TextInput source='nationality' validate={[ required ]} />
      <RadioButtonGroupInput source="gender" choices={[
        { id: 'male', name: 'Male' },
        { id: 'female', name: 'Female' },
      ]} />
      <TextInput source='description' label='generic.description'/>
      <SelectArrayInput source='tag' label='generic.tag'/>
    </SimpleForm>
  </Create>
);
