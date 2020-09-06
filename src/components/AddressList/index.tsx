import React, { useState, useEffect } from 'react';
import { getAddresses } from '../resources';
import { AddressType } from '../resources/types';

import { Table } from 'react-bootstrap';

export const AddressList = () => {
    const [addressState, setAddressState] = useState<AddressType[]>([]);
    useEffect(() => {
        const promise = getAddresses();
        promise.then(data => setAddressState(data.results));
    }, []);
    
    return (
        <Table striped hover>
            <thead>
                <tr>
                    <th>名前</th>
                    <th>名前（カナ）</th>
                    <th>性別</th>
                    <th>電話番号</th>
                    <th>メールアドレス</th>
                    <th>郵便番号</th>
                    <th>都道府県</th>
                    <th>市区町村</th>
                    <th>番地</th>
                    <th>建物名</th>
                    <th>住所・その他</th>
                    <th>年齢</th>
                </tr>
            </thead>
            <tbody>
                {addressState.map((address) => {
                    return (
                    <tr key={address.id}>
                        <td>{address.name}</td>
                        <td>{address.name_kana}</td>
                        <td>{address.gender}</td>
                        <td>{address.phone}</td>
                        <td>{address.mail}</td>
                        <td>{address.zipcode}</td>
                        <td>{address.address1}</td>
                        <td>{address.address2}</td>
                        <td>{address.address3}</td>
                        <td>{address.address4}</td>
                        <td>{address.address5}</td>
                        <td>{address.age}</td>
                    </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}