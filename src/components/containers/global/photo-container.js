import React from 'react'
import { connect } from 'react-redux'
import store from '../../../store'
import {getPhotosAPI} from '../../../api/photo-api'
import * as actions from '../../../actions/photo-actions'

class PhotoContainer extends React.Component {
    constructor(props) {
        super(props)
        this._renderTable = this._renderTable.bind(this);
        this._renderTableFoot = this._renderTableFoot.bind(this);
        this._renderTableHeader = this._renderTableHeader.bind(this);
        this.handleFilterTitleChange = this.handleFilterTitleChange.bind(this);
        this.handleFilterAlbumIdChange = this.handleFilterAlbumIdChange.bind(this);
        this.state = {
            pageSize: 20,
            showRecords: [],
            recordSize: 0

        }
    }

    componentDidMount() {
        getPhotosAPI()
        .done(()=>{
          this.updateRecords(this.props);
        });
    }

    componentWillReceiveProps(nextProps){
        this.updateRecords(nextProps);
    }

    updateRecords(nextProps){
        let rows = [];
        let count = 0;
        let self = this;
        this.props.records.forEach((photo, i) => {
            if (nextProps.filterTitle !== undefined && photo.title.indexOf(nextProps.filterTitle) === -1) {
                return;
            }
            if (nextProps.filterAlbumId !== ''  && String(photo.albumId) !== String(nextProps.filterAlbumId)) {
                return;
            }
            if (count <= self.state.pageSize -1) {
                rows.push(
                    <tr key={i}>
                        <td>{photo.id}</td>
                        <td>{photo.albumId}</td>
                        <td><img height="20px" role="presentation" src={photo.thumbnailUrl}/></td>
                        <td>{photo.title}</td>
                    </tr>);
                }
                count++
            });
        this.setState({showRecords: rows });
        this.setState({recordSize: count });
    }

    handleFilterTitleChange(e){
        let filterTitle = e.target.value;
        store.dispatch(actions.setPhotoFilterTitle(filterTitle));
    }

    handleFilterAlbumIdChange(e){
        let filterAlbumId = e.target.value;
        store.dispatch(actions.setPhotoFilterAlbumId(filterAlbumId));
    }

    _renderTableHeader(){
        return (
            <div className="row">
                <div className="col-lg-6">
                    <i className="fa fa-align-justify"></i> Combined All Table
                </div>
                <div className="col-lg-6 text-right">
                    Total <b className="count">{this.state.recordSize}</b> Items, <b>{this.state.pageSize}</b> records per page
                </div>
            </div>
        )
    }

    _renderTableFoot(){
        let pagesNum = Math.round(this.state.recordSize/this.state.pageSize);
        return (
            <nav>
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">....</a></li>
                <li className="page-item"><a className="page-link" href="#">{pagesNum-1}</a></li>
                <li className="page-item"><a className="page-link" href="#">{pagesNum}</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
            </nav>
        )
    }

    _renderTable(){
        return (
            <table className="table table-bordered table-striped table-condensed">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>AlbumID</th>
                        <th>Icon</th>
                        <th>Title</th>
                    </tr>
                    <tr>
                        <th></th>
                            <th>
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Search..."
                                        value={this.props.filterAlbumId}
                                        onChange={this.handleFilterAlbumIdChange}/>
                                    <span className="input-group-addon"><i className="fa fa-search"></i></span>
                                </div>
                            </th>
                        <th></th>
                        <th>
                            <div className="input-group">
                                <input
                                    className="form-control filterTitle"
                                    type="text"
                                    placeholder="Search..."
                                    value={this.props.filterTitle}
                                    onChange={this.handleFilterTitleChange}/>
                                <span className="input-group-addon"><i className="fa fa-search"></i></span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>{this.state.showRecords}</tbody>
            </table>
        )
    }

    render() {
            return (
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                {this._renderTableHeader()}
                            </div>
                            <div className="card-block">
                                {this._renderTable()}
                                {this._renderTableFoot()}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const mapStateToProps = (store) => ({
        records: store.photoState.records,
        filterTitle: store.photoState.filterTitle,
        filterAlbumId: store.photoState.filterAlbumId
    });

    export default connect(mapStateToProps)(PhotoContainer)
