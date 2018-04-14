import React from 'react';
import PropTypes from 'prop-types';
import {
  List, Show, Edit, Create, Filter, Datagrid,
  SimpleShowLayout, SimpleForm, TabbedForm, FormTab, LatLngField,
  ReferenceField, DateField, NumberField, TextField, ChipField, BooleanField,
  NumberInput, DateInput, DisabledInput, LongTextInput, SelectInput, SelectArrayInput, ReferenceInput,
  TextInput, BooleanInput, AutocompleteInput, EditButton,
  required, minLength, maxLength, minValue, maxValue, number, regex, choices,
} from 'admin-on-rest';

const UserFilter = props => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
  </Filter>
);

export const UserList = props => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='fullName' />
      <TextField source='username' />
      <TextField source='email' />
      <TextField source='phone1' />
      <DateField source='updatedDate' showTime />
    </Datagrid>
  </List>
);

const UserTitle = ({ record }) => <span>{record ? `${record.username}` : ''}</span>;

UserTitle.propTypes = {
  record: PropTypes.object,
};

export const UserShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='fullName' />
      <TextField source='username' />
      <TextField source='email' />
      <TextField source='address1' />
      <TextField source='address2' />
      <TextField source='phone1' />
      <TextField source='phone2' />
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

export const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <TabbedForm>
      <FormTab label='generic.general'>
        <DisabledInput source='id' />
        <TextInput source='fullName' validate={[ required ]} />
        <TextInput source='username' />
        <TextInput source='password' validate={[ required ]} />
        <TextInput source='email' validate={[ required ]} />
        <TextInput source='address1' />
        <TextInput source='address2' />
        <TextInput source='phone1' />
        <TextInput source='phone2' />
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

export const UserEditPopup = props => (
  <EditPopup resource='users' title={<UserTitle />} {...props}>
    <TabbedForm>
      <FormTab label='generic.general'>
        <DisabledInput source='id' />
        <TextInput source='fullName' validate={[ required ]} />
        <TextInput source='username' />
        <TextInput source='password' validate={[ required ]} />
        <TextInput source='email' validate={[ required ]} />
        <TextInput source='address1' />
        <TextInput source='address2' />
        <TextInput source='phone1' />
        <TextInput source='phone2' />
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
  </EditPopup>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='fullName' validate={[ required ]} />
      <TextInput source='username' />
      <TextInput source='password' validate={[ required ]} />
      <TextInput source='email' validate={[ required ]} />
      <TextInput source='address1' />
      <TextInput source='address2' />
      <TextInput source='phone1' />
      <TextInput source='phone2' />
    </SimpleForm>
  </Create>
);

export const UserCreatePopup = props => (
  <CreatePopup resource='users' {...props}>
    <SimpleForm>
      <TextInput source='fullName' validate={[ required ]} />
      <TextInput source='username' />
      <TextInput source='password' validate={[ required ]} />
      <TextInput source='email' validate={[ required ]} />
      <TextInput source='address1' />
      <TextInput source='address2' />
      <TextInput source='phone1' />
      <TextInput source='phone2' />
    </SimpleForm>
  </CreatePopup>
);
